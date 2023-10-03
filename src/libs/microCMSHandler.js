import { createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getList = async () => {
    return await client.getList({
        endpoint: "blog",
    });
};

export const getDetail = async (contentId) => {
    return await client.get({
        endpoint: "blog",
        contentId: contentId,
    });
};

export const getWorks = async () => {
    return await client.getList({
        endpoint: "works",
    });
};

export const getDetailWorks = async (contentId) => {
    return await client.getListDetail({
        endpoint: "works",
        contentId: contentId,
    });
};