import { Client, Databases, Account } from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("64770c00d92badddfdf6")

export const account = new Account(client);

export const databases = new Databases(client, "64770c8d769fb645a01e")