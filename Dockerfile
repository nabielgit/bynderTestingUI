FROM cypress/browsers:node-20.12.0-chrome-123.0.6312.86-1-ff-124.0.2-edge-123.0.2420.65-1
# Working directory is created
WORKDIR /bynderTestingUI

# Copies from current project directory to working directory
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

# execute command during imag ebuilding process
RUN npm install
# run entry-point
ENTRYPOINT ["npx", "cypress", "run"]