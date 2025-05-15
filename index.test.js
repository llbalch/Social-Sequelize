const { Comment, Like, Post, Profile, User } = require("./index.js");
const { db } = require("./db/connection.js")

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await db.sync({ force: true });
        })
    
    afterAll(async () => {
        await db.close();
    })
    
    test('can create a User', async () => {
    const testUser = await User.create({ username: 'George', password: '123' });
    expect(testUser.username).toBe('George');
})


    test('User can be associated with a profile', async () => {
    const newTestUser = await User.create({ name: 'Paul', password: '123' });
    const profile = await Profile.create({bio: 'Software Engineer', profilePicture:'pic.jpg', birthday: '1992-01-02'})
    await newTestUser.setProfile(profile)
    const matchedProfile = await newTestUser.getProfile()
    expect(matchedProfile.bio).toEqual('Software Engineer')
})


   test('A user can have many posts', async () => {
    const testUserPost = await User.create({ name: 'George', password: '123' });
    const posts = await Post.bulkCreate([
        { title: 'Summer', body: 'What a hot summer day!', createdAt: '2025-05-15' },
        { title: 'Fun', body: 'She had a great time!', createdAt: '2025-04-02' }
    ]);
    await testUserPost.setPosts(posts);
    const matchedPosts = await testUserPost.getPosts();
    expect(matchedPosts.length).toEqual(2);
    expect(matchedPosts[0].title).toEqual('Summer');
})

   test('A post can have many comments', async () => {
    const posts2 = await Post.create(
        { title: 'Summer', body: 'What a hot summer day!', createdAt: '2025-05-15' })

    const comments = await Comment.bulkCreate([
        {body:'Fun in the sun!', createdAt:'2025-05-15'},
        {body:'How awesome', createdAt:'2025-05-10'}
    ]);
    await posts2.setComments(comments);
    const matchedComments = await posts2.getComments();
    expect(matchedComments.length).toEqual(2);
    expect(matchedComments[0].body).toEqual('Fun in the sun!');
})

  test("many users can have many likes AND vice versa", async () => {
    const newUser3 = await User.create({ username: "John", email: "John@gmail.com" });
    const newUser4 = await User.create({ username: "Jerry", email: "Jerry@gmail.com" });
    const newUser5 = await User.create({ username: "Ken", email: "Ken@gmail.com" });
    const like1 = await Like.create({
      reactionType: "Heart",
      createdAt: "2025-05-05",
    });
    const like2 = await Like.create({
      reactionType: "Thumbs Up",
      createdAt: "2025-04-04",
    });
    const like3 = await Like.create({
      reactionType: "Thumbs Down",
      createdAt: "2025-03-03",
    });

    await newUser3.addLikes([like1, like2]);

    const foundLikes = await newUser3.getLikes();
    expect(foundLikes.length).toBe(2);

    await like2.addUsers([newUser5, newUser4]);
    const foundUsers = await like2.getUsers();
    expect(foundUsers.map( user => user.username)).toContain("Ken");
  });





})
