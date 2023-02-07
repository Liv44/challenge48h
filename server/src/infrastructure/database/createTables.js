export const createTablesQuery = `CREATE TABLE IF NOT EXISTS "User"(
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
    "numberofartist" BIGINT NOT NULL,
    "color" VARCHAR(255) NOT NULL,
    "size" SMALLINT NOT NULL
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
    "OrderArticleLink" ADD CONSTRAINT "orderarticlelink_orderid_foreign" FOREIGN KEY("orderid") REFERENCES "Order"("id");`