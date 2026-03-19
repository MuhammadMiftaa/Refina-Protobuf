#!/bin/bash

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: ./generate.sh <proto-name> <language>"
    echo ""
    echo "Languages: go, node, all"
    echo ""
    echo "Examples:"
    echo "  ./generate.sh wallet go"
    echo "  ./generate.sh wallet node"
    echo "  ./generate.sh wallet all"
    exit 1
fi

PROTO_NAME=$1
LANGUAGE=$2
PROTO_FILE="$PROTO_NAME/$PROTO_NAME.proto"

# Check if proto file exists
if [ ! -f "$PROTO_FILE" ]; then
    echo "❌ Proto file not found: $PROTO_FILE"
    exit 1
fi

generate_go() {
    echo "🔄 Generating Go code for ${PROTO_NAME}..."
    
    protoc --go_out=. \
           --go_opt=paths=source_relative \
           --go-grpc_out=. \
           --go-grpc_opt=paths=source_relative \
           "$PROTO_FILE"
    
    if [ $? -eq 0 ]; then
        echo "✅ Go proto files generated!"
        echo "📁 ${PROTO_NAME}/${PROTO_NAME}.pb.go"
        echo "📁 ${PROTO_NAME}/${PROTO_NAME}_grpc.pb.go"
    else
        echo "❌ Failed to generate Go proto files"
        return 1
    fi
}

generate_node() {
    echo "🔄 Generating Node.js code for ${PROTO_NAME}..."
    
    # Check if grpc_tools_node_protoc is available
    if ! command -v grpc_tools_node_protoc &> /dev/null; then
        echo "⚠️  grpc-tools not found, installing..."
        npm install -g grpc-tools
    fi
    
    grpc_tools_node_protoc \
        --js_out=import_style=commonjs,binary:. \
        --grpc_out=grpc_js:. \
        --plugin=protoc-gen-grpc=$(which grpc_tools_node_protoc_plugin) \
        "$PROTO_FILE"
  
    grpc_tools_node_protoc \
        --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
        --ts_out=grpc_js:. \
        "$PROTO_FILE"

    if [ $? -eq 0 ]; then
        echo "✅ Node.js proto files generated!"
        echo "📁 ${PROTO_NAME}/${PROTO_NAME}_pb.js"
        echo "📁 ${PROTO_NAME}/${PROTO_NAME}_grpc_pb.js"
    else
        echo "❌ Failed to generate Node.js proto files"
        return 1
    fi
}

generate_php() {
    echo "🔄 Generating PHP code for ${PROTO_NAME}..."

    if ! command -v protoc &> /dev/null; then
        echo "❌ protoc not found."
        return 1
    fi

    if ! command -v grpc_php_plugin &> /dev/null; then
        echo "⚠️  grpc_php_plugin not found"
        echo "   Install via: pecl install grpc"
        echo "   atau download dari: https://github.com/grpc/grpc"
        return 1
    fi

    TEMP_DIR=$(mktemp -d)

    protoc \
        --proto_path=. \
        --php_out="$TEMP_DIR" \
        "$PROTO_FILE"

    protoc \
        --proto_path=. \
        --grpc_out="$TEMP_DIR" \
        --plugin=protoc-gen-grpc=$(which grpc_php_plugin) \
        "$PROTO_FILE"

    if [ $? -ne 0 ]; then
        echo "❌ Failed to generate PHP proto files"
        rm -rf "$TEMP_DIR"
        return 1
    fi

    PASCAL_NAME="$(echo "${PROTO_NAME}" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')"

    if [ -d "$TEMP_DIR/$PASCAL_NAME" ]; then
        mv "$TEMP_DIR/$PASCAL_NAME"/*.php "./$PROTO_NAME/"
    fi

    if [ -d "$TEMP_DIR/GPBMetadata/$PASCAL_NAME" ]; then
        mv "$TEMP_DIR/GPBMetadata/$PASCAL_NAME"/*.php "./$PROTO_NAME/"
    fi

    rm -rf "$TEMP_DIR"
    rm -rf "./$PASCAL_NAME"
    rm -rf "./GPBMetadata"

    echo "✅ PHP proto files generated!"
    echo "📁 ${PROTO_NAME}/*.php  (messages)"
    echo "📁 ${PROTO_NAME}/*Client.php  (gRPC client)"
}

case "$LANGUAGE" in
    "go")
        generate_go
        ;;
    "node")
        generate_node
        ;;
    "php")
        generate_php
        ;;
    "all")
        echo "🚀 Generating for all languages..."
        echo ""
        generate_go
        echo ""
        generate_node
        echo ""
        generate_php
        echo ""
        echo "✅ All proto files generated!"
        ;;
    *)
        echo "❌ Unknown language: $LANGUAGE"
        echo "Supported: go, node, all"
        exit 1
        ;;
esac