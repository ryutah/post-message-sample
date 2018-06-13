package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/index.html")
	})
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	http.HandleFunc("/message", func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Receive message: %q", r.FormValue("message"))
	})

	http.ListenAndServe(":8080", nil)
}
