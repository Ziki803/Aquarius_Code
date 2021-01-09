module.exports = {
    name: 'role',
    description: 'Give users a role!', //!role @person, @role
    args: true,
    usage:  '<user> <role>',
    execute(message, args) {
        user.roles.add(args).catch((e) => console.log(e.message));
    }, 
};