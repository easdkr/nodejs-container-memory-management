FROM node:20

COPY test-fatal-error.js index.js

CMD ["node", "--max_old_space_size=1024", "index.js"]