PGDMP  1    ,                |            Repuestos3J    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16693    Repuestos3J    DATABASE     �   CREATE DATABASE "Repuestos3J" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE "Repuestos3J";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    16697 	   repuestos    TABLE     �   CREATE TABLE public.repuestos (
    nombre character varying(40) NOT NULL,
    precio integer NOT NULL,
    product_id character varying NOT NULL
);
    DROP TABLE public.repuestos;
       public         heap    postgres    false    4            �            1259    16715    usuario    TABLE     �   CREATE TABLE public.usuario (
    "user" character varying,
    password character varying,
    id character varying,
    email character varying
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    4            �          0    16697 	   repuestos 
   TABLE DATA           ?   COPY public.repuestos (nombre, precio, product_id) FROM stdin;
    public          postgres    false    215   �	       �          0    16715    usuario 
   TABLE DATA           >   COPY public.usuario ("user", password, id, email) FROM stdin;
    public          postgres    false    216   H
       T           2606    16706    repuestos pk_users 
   CONSTRAINT     X   ALTER TABLE ONLY public.repuestos
    ADD CONSTRAINT pk_users PRIMARY KEY (product_id);
 <   ALTER TABLE ONLY public.repuestos DROP CONSTRAINT pk_users;
       public            postgres    false    215            �   ?   x�s*�J�MM�L���4400�40����I,K�4s����j܋�RR�J����q��qqq �]      �   j   x�s*�/��K-)I�4200�40�L�9��&f��%��r�'rZ�s��q9Ȓ�y)E�Ws$���T$ER����&e&r����(F��� '�11     