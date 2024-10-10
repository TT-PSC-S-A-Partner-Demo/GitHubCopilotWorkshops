package com.ttpsc.copilot_training.pipeline.pattern;
public class PipelinePattern {

    public static String processDocument(String doc) {
        doc = doc.toLowerCase();
        doc = doc.replaceAll(",", "");
        doc = doc.replaceAll("\\.", "");
        doc = doc.replaceAll("!", "");
        doc = doc.replaceAll("\\?", "");
        String[] words = doc.split(" ");
        for (int i = 0; i < words.length; i++) {
            if (words[i].length() > 0 && words[i].charAt(0) == 'a') {
                words[i] = words[i].toUpperCase();
            }
        }
        return String.join(" ", words);
    }

    public static void main(String[] args) {
        String doc = "Hello, World! Are apples amazing?";
        String processedDoc = processDocument(doc);
        System.out.println(processedDoc);
    }
}