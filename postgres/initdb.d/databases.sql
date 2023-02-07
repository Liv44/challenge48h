CREATE DATABASE challenge48h;

\c challenge48h;

-- USE challenge48h;

CREATE TABLE IF NOT EXISTS "User"(
    "id" UUID NOT NULL,
    "passwordhash" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "User" ADD PRIMARY KEY("id");
CREATE TABLE IF NOT EXISTS "Order"(
    "id" UUID NOT NULL,
    "createdat" DATE NOT NULL,
    "updatedat" DATE NOT NULL
);
ALTER TABLE
    "Order" ADD PRIMARY KEY("id");
CREATE TABLE IF NOT EXISTS "Bag"(
    "id" UUID NOT NULL,
    "userid" UUID NOT NULL,
    "createdat" DATE NOT NULL,
    "updatedat" DATE NOT NULL
);
ALTER TABLE
    "Bag" ADD PRIMARY KEY("id");
CREATE TABLE IF NOT EXISTS "BagArticleLink"(
    "articleid" UUID NOT NULL,
    "bagid" UUID NOT NULL,
    "numberofarticle" BIGINT NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "size" VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS "Article"(
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "urlimg" VARCHAR(255) NOT NULL,
    "shopid" UUID NOT NULL,
    "type" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Article" ADD PRIMARY KEY("id");
CREATE TABLE IF NOT EXISTS "Shop"(
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "keywords" VARCHAR(255) NOT NULL,
    "tag" VARCHAR(255) NOT NULL,
    "localisation" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Shop" ADD PRIMARY KEY("id");
CREATE TABLE IF NOT EXISTS "OrderArticleLink"(
    "articleid" UUID NOT NULL,
    "orderid" UUID NOT NULL,
    "numberofartist" BIGINT NOT NULL,
    "color" BIGINT NOT NULL,
    "size" BIGINT NOT NULL
);
ALTER TABLE
    "OrderArticleLink" ADD CONSTRAINT "orderarticlelink_articleid_foreign" FOREIGN KEY("articleid") REFERENCES "Article"("id");
ALTER TABLE
    "BagArticleLink" ADD CONSTRAINT "bagarticlelink_articleid_foreign" FOREIGN KEY("articleid") REFERENCES "Article"("id");
ALTER TABLE
    "Article" ADD CONSTRAINT "article_shopid_foreign" FOREIGN KEY("shopid") REFERENCES "Shop"("id");
ALTER TABLE
    "BagArticleLink" ADD CONSTRAINT "bagarticlelink_bagid_foreign" FOREIGN KEY("bagid") REFERENCES "Bag"("id");
ALTER TABLE
    "Bag" ADD CONSTRAINT "bag_userid_foreign" FOREIGN KEY("userid") REFERENCES "User"("id");
ALTER TABLE
    "OrderArticleLink" ADD CONSTRAINT "orderarticlelink_orderid_foreign" FOREIGN KEY("orderid") REFERENCES "Order"("id");

insert into "Shop"(id, name, keywords, tag, localisation) values ('6e7da96f-63f6-4c1b-bca0-3edff6314b91', 'Meejo', 'Lorem ipsum dolor sit amet','tag', '54498 High Crossing Junction');
insert into "Shop"(id, name, keywords, tag, localisation) values ('60d8ca0c-3204-4811-bf23-e276bee870f5', 'Realpoint', 'Nulla nisl Nunc nisl','tag', '230 Kipling Point');

insert into "User"(id, passwordhash, name, email, address, role) values ('d2937569-8462-41f1-b1b0-21be31832876', 'a2e792192c7d51e0ebb9acae3f28f4a396f6513ce29f51595aefb83c3ccfc5fe', 'jean', 'addjean@slideshare.net', '36 Crownhardt Trail', 'admin');
insert into "User"(id, passwordhash, name, email, address, role) values ('da0f1692-cb8d-4c22-98ee-8109a4e3e2ce', '1b1b5f825ced2fde10f86debe73482fbab070e0943d30a26a1916b21232de648', 'jack', 'addjack@jugem.jp', '3 Sauthoff Street', 'trader');
insert into "User"(id, passwordhash, name, email, address, role) values ('9738e88b-7163-4175-9d03-72a6a90dc9f2', '91f613b90a26a006212740cf4ee7c53c9719d8f23adb4d86f48c8957ac63fb16', 'jhon', 'addjhon@businessweek.com', '8 Dakota Drive', 'null');

insert into "Bag"(id, userid, createdat, updatedat) values ('2987fd03-c1dd-42fa-8412-c031a5397741', 'd2937569-8462-41f1-b1b0-21be31832876', '2/9/2022', '5/1/2022');
insert into "Bag"(id, userid, createdat, updatedat) values ('8811da35-ee1d-4739-b2f8-9c5b9365e105', 'da0f1692-cb8d-4c22-98ee-8109a4e3e2ce', '6/24/2022', '5/14/2022');
insert into "Bag"(id, userid, createdat, updatedat) values ('7e48d07c-372a-4eff-bd14-1a179bd74989', '9738e88b-7163-4175-9d03-72a6a90dc9f2', '10/15/2022', '2/11/2022');

insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('14b57283-32f9-421a-89e2-d194861edf58', 'chaussure', 31, 'La description', 'https://picsum.photos/200/300', '6e7da96f-63f6-4c1b-bca0-3edff6314b91', 'vetement');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('df4ad722-bbee-4aee-b9ef-5414fb84b694', 'ballon', 40, 'La description', 'https://picsum.photos/200/300', '6e7da96f-63f6-4c1b-bca0-3edff6314b91', 'sport');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('a98952fd-d6aa-4c39-919d-6ade06a0349c', 'souris', 77, 'La description', 'https://picsum.photos/200/300', '6e7da96f-63f6-4c1b-bca0-3edff6314b91', 'informatique');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('d221cea1-0cd6-449c-a6c4-b7b6010cddbd', 'herbe à chat', 63, 'La description', 'https://picsum.photos/200/300', '6e7da96f-63f6-4c1b-bca0-3edff6314b91', 'nature');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('2d467a21-b380-4d4f-bc60-c1b51de13832', 'planche', 92, 'La description', 'https://picsum.photos/200/300', '6e7da96f-63f6-4c1b-bca0-3edff6314b91', 'nature');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('88a521ac-e2eb-45c5-af91-eef1a870c2b5', 'oeuf', 49, 'La description', 'https://picsum.photos/200/300', '6e7da96f-63f6-4c1b-bca0-3edff6314b91', 'nourriture');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('c0d39fea-29da-4f91-87e8-5a90a3401b41', 'shampoing', 88, 'La description', 'https://picsum.photos/200/300','60d8ca0c-3204-4811-bf23-e276bee870f5', 'soin');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('ad7d1093-c876-4e66-b4cb-566e5216d321', 'telephone', 28, 'La description', 'https://picsum.photos/200/300', '60d8ca0c-3204-4811-bf23-e276bee870f5', 'informatique');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('d89cd46d-5d7a-43c1-a72b-acd15a4ac469', 'écouteurs', 79, 'La description', 'https://picsum.photos/200/300', '60d8ca0c-3204-4811-bf23-e276bee870f5','informatique');
insert into "Article"(id, name, price, description, urlimg, shopid, type) values ('854cca95-120f-49b3-b054-ef4f86801791', 'chaise', 25, 'La description', 'https://picsum.photos/200/300', '60d8ca0c-3204-4811-bf23-e276bee870f5','meuble');

insert into "BagArticleLink"(articleid, bagid, numberofarticle, color, size) values ('14b57283-32f9-421a-89e2-d194861edf58', '7e48d07c-372a-4eff-bd14-1a179bd74989', 1, 'Turquoise', 'M');
insert into "BagArticleLink"(articleid, bagid, numberofarticle, color, size) values ('df4ad722-bbee-4aee-b9ef-5414fb84b694', '7e48d07c-372a-4eff-bd14-1a179bd74989', 2, 'Aquamarine', 'M');
insert into "BagArticleLink" (articleid, bagid, numberofarticle, color, size) values ('a98952fd-d6aa-4c39-919d-6ade06a0349c', '7e48d07c-372a-4eff-bd14-1a179bd74989', 3, 'Turquoise', 'L');
insert into "BagArticleLink" (articleid, bagid, numberofarticle, color, size) values ('d221cea1-0cd6-449c-a6c4-b7b6010cddbd', '7e48d07c-372a-4eff-bd14-1a179bd74989', 4, 'Violet', 'L');