FROM mcr.microsoft.com/playwright:focal
RUN mkdir e2e
WORKDIR /e2e
COPY ./config/git.sh ./
COPY ./config/* ./
RUN npm i -D @playwright/test
RUN npx playwright install
ENTRYPOINT sh git.sh



#RUN mkdir /root/.ssh
#COPY id_rsa.pub /root/.ssh
#COPY id_rsa /root/.ssh
#RUN chmod 0400 /root/.ssh/id_rsa

