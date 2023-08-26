""" Seed file to create sample data for db """

from models import User, Post, Tag, PostTag, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
User.query.delete()
Post.query.delete()
Tag.query.delete()
PostTag.query.delete()

# Add users
u1 = User(first_name='John', last_name='Smith', image_url='https://www.abc.net.au/news/image/8314104-1x1-700x700.jpg')
u2 = User(first_name='Jane', last_name='Doe', image_url='https://www.abc.net.au/news/image/8314104-1x1-700x700.jpg')
u3 = User(first_name='Bob', last_name='Smith', image_url='https://www.abc.net.au/news/image/8314104-1x1-700x700.jpg')
u4 = User(first_name='Sally', last_name='Smith', image_url='https://www.abc.net.au/news/image/8314104-1x1-700x700.jpg')

# Add new objects to session, so they'll persist
db.session.add(u1)
db.session.add(u2)
db.session.add(u3)
db.session.add(u4)

# Commit--otherwise, this never gets saved!

db.session.commit()

# Add posts
p1 = Post(title='First Post', content='This is my first post!', user_id=1)
p2 = Post(title='Second Post', content='This is my second post!', user_id=1)
p3 = Post(title='Third Post', content='This is my third post!', user_id=2)
p4 = Post(title='Fourth Post', content='This is my fourth post!', user_id=2)
p5 = Post(title='Fifth Post', content='This is my fifth post!', user_id=3)
p6 = Post(title='Sixth Post', content='This is my sixth post!', user_id=3)
p7 = Post(title='Seventh Post', content='This is my seventh post!', user_id=4)
p8 = Post(title='Eighth Post', content='This is my eighth post!', user_id=4)

# Add new objects to session, so they'll persist
db.session.add(p1)
db.session.add(p2)
db.session.add(p3)
db.session.add(p4)
db.session.add(p5)
db.session.add(p6)
db.session.add(p7)
db.session.add(p8)

# Commit--otherwise, this never gets saved!

db.session.commit()

# Add tags
t1 = Tag(name='Fun')
t2 = Tag(name='Boring')
t3 = Tag(name='Exciting')
t4 = Tag(name='Meh')

# Add new objects to session, so they'll persist
db.session.add(t1)
db.session.add(t2)
db.session.add(t3)
db.session.add(t4)

# Commit--otherwise, this never gets saved!

db.session.commit()

# Add post tags
pt1 = PostTag(post_id=1, tag_id=1)
pt2 = PostTag(post_id=1, tag_id=2)
pt3 = PostTag(post_id=2, tag_id=3)
pt4 = PostTag(post_id=2, tag_id=4)
pt5 = PostTag(post_id=3, tag_id=1)
pt6 = PostTag(post_id=3, tag_id=2)
pt7 = PostTag(post_id=4, tag_id=3)
pt8 = PostTag(post_id=4, tag_id=4)
pt9 = PostTag(post_id=5, tag_id=1)
pt10 = PostTag(post_id=5, tag_id=2)
pt11 = PostTag(post_id=6, tag_id=3)
pt12 = PostTag(post_id=6, tag_id=4)
pt13 = PostTag(post_id=7, tag_id=1)
pt14 = PostTag(post_id=7, tag_id=2)
pt15 = PostTag(post_id=8, tag_id=3)
pt16 = PostTag(post_id=8, tag_id=4)

# Add new objects to session, so they'll persist
db.session.add(pt1)
db.session.add(pt2)
db.session.add(pt3)
db.session.add(pt4)
db.session.add(pt5)
db.session.add(pt6)
db.session.add(pt7)
db.session.add(pt8)
db.session.add(pt9)
db.session.add(pt10)
db.session.add(pt11)
db.session.add(pt12)
db.session.add(pt13)
db.session.add(pt14)
db.session.add(pt15)
db.session.add(pt16)

# Commit--otherwise, this never gets saved!

db.session.commit()


