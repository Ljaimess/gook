import axios from "axios";

export default {
    //all books
    getBooks: function () {
        return axios.get("api/books");
    },
    // books by id
    gettBook: function (id) {
        return axios.get("/api/book/" + id);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books" + id);
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};