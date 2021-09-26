# SharkOJ

## Scalable Online Judge for coding competitions

## What is the purpose of SharkOJ?

This is an Online Judge REST API server for checking and auto-grading coding submissions. The aim is to create fast, interactive and resilient Judge which can handle multitudes of load and configuration.

## Technologies that are involved

The REST server is built on **Node runtime** using **Express** framework. Uses **Web Sockets** for interactive I/O. Backed by **PostgreSQL** for persistent storage.

Uses **Dockerized Sandbox** for secure compilation and execution of user submitted code and is highly scalable.

## Install and Run

 - `npm install`
 - `npm run`
