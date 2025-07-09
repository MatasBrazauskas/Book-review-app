# Stage 1: Build the Spring Boot application using Maven
FROM maven:3.8.5-openjdk-17 AS builder

WORKDIR /app

# Copy the Maven project files
COPY pom.xml .
COPY src ./src

# Build the application (skip tests for faster image build)
RUN mvn clean install -DskipTests

# Stage 2: Run the Spring Boot application
FROM openjdk:17-jre-slim

WORKDIR /app

# Copy the built JAR file from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose the port Spring Boot runs on (default is 8080)
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]