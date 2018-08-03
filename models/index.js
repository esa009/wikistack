const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Page title'
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Page slug'
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Page content'
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});
const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'User name'
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,
        defaultValue: 'User email'
    }
});

function generateSlug(title) {
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

Page.beforeValidate((page) => {
    console.log('before validate ' + page.title);
    page.slug = generateSlug(page.title);
    console.log('new slug ' + page.slug);
});

module.exports = { db, Page, User };

