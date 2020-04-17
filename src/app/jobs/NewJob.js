export default {
    key: 'NewJob',
    async handle({ data }) {
        const { user } = data;

        console.log(`Olá, ${user.name}`);
    },
};