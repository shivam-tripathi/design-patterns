package com.patterns.others;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import com.fasterxml.jackson.databind.ObjectMapper;

interface GoogleService {
}

class Main {
	public static void main(String[] args) throws Exception {
		System.out.printf("%s \n", Paths.get("response.json"));
		byte[] jsonData = Files.readAllBytes(Paths.get("response.json"));
		ObjectMapper objectMapper = new ObjectMapper();
		Response resp = objectMapper.readValue(jsonData, Response.class);
		System.out.printf("Hello world! %s\n", resp);
	}
}

