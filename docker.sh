#!/bin/bash

# Dahab Tablet Docker Management Script
# Usage: ./docker.sh [command]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if .env file exists, if not copy from .env.example
check_env_file() {
    if [ ! -f .env ]; then
        print_warning ".env file not found. Creating from .env.example..."
        cp .env.example .env
        print_info "Please edit .env file with your Firebase configuration before running the application."
    fi
}

# Help function
show_help() {
    echo "Dahab Tablet Docker Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  dev           Start development environment"
    echo "  prod          Start production environment"
    echo "  build         Build production image"
    echo "  stop          Stop all containers"
    echo "  restart       Restart containers"
    echo "  logs          Show logs"
    echo "  clean         Clean up containers and images"
    echo "  shell         Access container shell"
    echo "  help          Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 dev        # Start development server on port 3001"
    echo "  $0 prod       # Start production server on port 3000 with nginx"
    echo "  $0 logs       # Show application logs"
    echo "  $0 clean      # Remove all containers and images"
}

# Development environment
start_dev() {
    print_info "Starting development environment..."
    check_env_file
    docker-compose -f docker-compose.yml --profile dev up --build dahab-dev
}

# Production environment
start_prod() {
    print_info "Starting production environment..."
    check_env_file
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml --profile production up --build -d
    print_success "Production environment started!"
    print_info "Application: http://localhost:3000"
    print_info "Nginx proxy: http://localhost:80"
}

# Build production image
build_prod() {
    print_info "Building production image..."
    docker-compose -f docker-compose.yml build dahab-app
    print_success "Production image built successfully!"
}

# Stop containers
stop_containers() {
    print_info "Stopping all containers..."
    docker-compose -f docker-compose.yml down
    print_success "All containers stopped!"
}

# Restart containers
restart_containers() {
    print_info "Restarting containers..."
    docker-compose -f docker-compose.yml restart
    print_success "Containers restarted!"
}

# Show logs
show_logs() {
    print_info "Showing application logs..."
    docker-compose -f docker-compose.yml logs -f dahab-app dahab-dev
}

# Clean up
cleanup() {
    print_warning "This will remove all containers, images, and volumes related to this project."
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "Cleaning up..."
        docker-compose -f docker-compose.yml down -v --rmi all
        docker system prune -f
        print_success "Cleanup completed!"
    else
        print_info "Cleanup cancelled."
    fi
}

# Access container shell
container_shell() {
    print_info "Available containers:"
    docker-compose -f docker-compose.yml ps
    echo
    read -p "Enter container name (dahab-app/dahab-dev): " container_name
    
    if [ -z "$container_name" ]; then
        container_name="dahab-app"
    fi
    
    print_info "Accessing $container_name shell..."
    docker-compose -f docker-compose.yml exec $container_name sh
}

# Main script logic
case "${1:-help}" in
    dev)
        start_dev
        ;;
    prod)
        start_prod
        ;;
    build)
        build_prod
        ;;
    stop)
        stop_containers
        ;;
    restart)
        restart_containers
        ;;
    logs)
        show_logs
        ;;
    clean)
        cleanup
        ;;
    shell)
        container_shell
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo
        show_help
        exit 1
        ;;
esac
