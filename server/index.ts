import Fastify from "fastify";

async function main(port: number) {
  const fastify = Fastify();

  await fastify
    .listen({
      port: port,
    })
    .then(() => {
      console.log("server started");
    });
}

main(3000);
