# ダミーユーザー作成
User.create!(
  email: 'user1@example.com',
  password: 'aaaaaaaa',
  name: 'オリバー',
  introduction: 'オリバーです',
  sex: 0,
  img: open("#{Rails.root}/db/dummy_img/1.jpg")
)
User.create!(
  email: 'user2@example.com',
  password: 'aaaaaaaa',
  name: 'ハリー',
  introduction: 'ハリーです',
  sex: 0,
  img: open("#{Rails.root}/db/dummy_img/2.jpg")
)
User.create!(
  email: 'user3@example.com',
  password: 'aaaaaaaa',
  name: 'オリヴィア',
  introduction: 'オリヴィアです',
  sex: 1,
  img: open("#{Rails.root}/db/dummy_img/3.jpg")
)
User.create!(
  email: 'user4@example.com',
  password: 'aaaaaaaa',
  name: 'リリー',
  introduction: 'リリーです',
  sex: 1,
  img: open("#{Rails.root}/db/dummy_img/4.jpg")
)
User.create!(
  email: 'user5@example.com',
  password: 'aaaaaaaa',
  name: 'サム',
  introduction: 'サムです',
  sex: 0,
  img: open("#{Rails.root}/db/dummy_img/5.jpg")
)
