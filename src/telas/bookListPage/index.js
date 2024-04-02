import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import BookList from "../../componentes/bookList";
import CampoTexto from "../../componentes/campoTexto";
import BookDetailsModal from "../../componentes/bookDetailsModal";
import { Platform } from 'react-native';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [filtroTitulo, setFiltroTitulo] = useState("");
  const [filtroAutor, setFiltroAutor] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [livrosFiltrados, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json"
        );
        const data = await response.json();
        const booksArray = Object.values(data);
        setBooks(booksArray);
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    const filtered = books.filter((book) => {
      if (
        filtroTitulo &&
        !book.title.toLowerCase().includes(filtroTitulo.toLowerCase())
      ) {
        return false;
      }
      if (
        filtroAutor &&
        !book.author.toLowerCase().includes(filtroAutor.toLowerCase())
      ) {
        return false;
      }
      if (
        filtroCategoria &&
        !book.genre.toLowerCase().includes(filtroCategoria.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setFilteredBooks(filtered);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filtroTitulo, filtroAutor, filtroCategoria]);

  const onViewDetails = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const OSInfo = () => {
    let message = '';
    
    if (Platform.OS === 'android') {
      message = 'Você está usando um dispositivo Android.';
    }
    if (Platform.OS === 'ios') {
      message = 'Você está usando um dispositivo iOS.';
    }
  }
  

  return (
    <ScrollView>
      <View>
        <Text>Lista de Livros Cadastrados - {message}</Text>
        <CampoTexto
          valor={filtroTitulo}
          placeholder="Filtrar por título"
          obrigatorio={false}
          aoAlterado={(valor) => setFiltroTitulo(valor)}
        />
        <CampoTexto
          valor={filtroAutor}
          placeholder="Filtrar por autor"
          obrigatorio={false}
          aoAlterado={(valor) => setFiltroAutor(valor)}
        />
        <CampoTexto
          valor={filtroCategoria}
          placeholder="Filtrar por categoria"
          obrigatorio={false}
          aoAlterado={(valor) => setFiltroCategoria(valor)}
        />
        <BookList
          books={livrosFiltrados == 0 ? books : livrosFiltrados}
          onViewDetails={onViewDetails}
        />
      </View>
      <BookDetailsModal book={selectedBook} onClose={closeModal} />
    </ScrollView>
  );
};

export default BookListPage;
