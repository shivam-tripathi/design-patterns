package com.patterns.others;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.node.BooleanNode;
import com.fasterxml.jackson.databind.node.IntNode;
import java.io.IOException;
import java.util.ArrayList;

import com.fasterxml.jackson.core.JsonParser;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Response {
	private String _id;
	private String playerId;
	private String questionId;
	private Integer attempt;
	private Object response;
	private Boolean ic;

	/**
	 * @param _id the _id to set
	 */
	public void set_id(String _id) {
		this._id = _id;
	}

	/**
	 * @return the _id
	 */
	public String get_id() {
		return _id;
	}

	public String getPlayerId() {
		return playerId;
	}

	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}

	public String getQuestionId() {
		return questionId;
	}

	public void setQuestionId(String questionId) {
		this.questionId = questionId;
	}

	public Integer getAttempt() {
		return attempt;
	}

	public void setAttempt(Integer attempt) {
		this.attempt = attempt;
	}

	public Boolean getIc() {
		return ic;
	}

	public void setIc(Boolean ic) {
		this.ic = ic;
	}

	/**
	 * @return the response
	 */
	public Object getResponse() {
		return response;
	}

	/**
	 * @param response the response to set
	 */
	public void setResponse(Object response) {
		this.response = response;
	}

	@Override
	public String toString() {
		System.out.printf("[ %s ] ", getResponse() instanceof ArrayList);
		System.out.printf("[ %s ] ", getResponse() instanceof Integer);
		System.out.printf("[ %s ] ", getResponse() instanceof String);
		return String.format("%s %s %s %s %s %s\n", get_id(), getPlayerId(), getQuestionId(), getAttempt(), getIc(), getResponse());
	}
}
