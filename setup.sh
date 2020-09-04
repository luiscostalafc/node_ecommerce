#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Install dependences${NC}"
yarn
echo -e "${GREEN}🚀 Up containers${NC}"
yarn up
echo -e "${GREEN}🚀 Migrate database${NC}"
yarn migrate
echo -e "${GREEN}🚀 Seed database${NC}"
yarn seed
echo -e "${GREEN}🚀 Start server${NC}"
yarn start