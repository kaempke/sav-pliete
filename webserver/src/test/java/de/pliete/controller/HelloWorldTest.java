package de.pliete.controller;

import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

public class HelloWorldTest {

    @Test
    public void should_return_a_welcomeText() {
        String test = new HelloWorld().index();
        assertThat(test, equalTo("Greetings from Spring Boot!"));
    }

}