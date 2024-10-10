package com.ttpsc.copilot_training.abstraction;

import java.util.ArrayList;
import java.util.List;

public class Abstraction {

    static class Book {
        int id;
        String title;
        String author;

        public Book(int id, String title, String author) {
            this.id = id;
            this.title = title;
            this.author = author;
        }

        @Override
        public String toString() {
            return "Book{" +
                    "id=" + id +
                    ", title='" + title + '\'' +
                    ", author='" + author + '\'' +
                    '}';
        }
    }

    private static List<Book> books = new ArrayList<>();

    public static void addBook(Book book) {
        books.add(book);
    }

    public static Book getBook(int id) {
        for (Book book : books) {
            if (book.id == id) {
                return book;
            }
        }
        return null;
    }

    public static List<Book> getAllBooks() {
        return books;
    }

    public static void main(String[] args) {
        addBook(new Book(1, "Book 1", "Author 1"));
        addBook(new Book(2, "Book 2", "Author 2"));

        System.out.println(getAllBooks());
        System.out.println(getBook(1));
    }
}