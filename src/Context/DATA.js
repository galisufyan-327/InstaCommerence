//This file contains all the static data needed in app

// this is data for user that is loged in.
export const User = {
  title: "Ali Sufyan",
  followers: 87,
  following: 20,
  coverPicture:
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
  profilePicture:
    "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  posts: [
    {
      title: "Post 1",
      image:
        "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 2",
      image:
        "https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 3",
      image:
        "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 4",
      image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 5",
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 6",
      image:
        "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 7",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 8",
      image:
        "https://images.pexels.com/photos/244796/pexels-photo-244796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
    {
      title: "Post 9",
      image:
        "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liked: false,
    },
  ],
  products: [
    {
      title: "Table chair combo",
      image:
        "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 70,
      description: "This package includes ergo chair and table. Color white.",
    },
    {
      title: "Apple MacBook pro 13 inch.",
      image:
        "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 550,
      description:
        "Almost new laptop, slightly used. 2 years warranty remaining.",
    },
    {
      title: "MacBook pro max 13 inch.",
      image:
        "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 680,
      description:
        "Almost new laptop, slightly used. 1 years warranty remaining.",
    },
    {
      title: "Canon DSLR camera with lens",
      image:
        "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 200,
      description:
        "Almost new camera, slightly used. 6 months warranty remaining.",
    },
  ],
};

// this is details of all posts
export const AllPosts = [
  {
    title: "Post 1",
    image:
      "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: true,
    profilePicture:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "John Doe",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! I'm Amazed.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 2",
    image:
      "https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: false,
    profilePicture:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "Jordan Smith",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 3",
    image:
      "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: true,
    profilePicture:
      "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "Micheal Angelo",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 4",
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: false,
    profilePicture:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "John Doe",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 5",
    image:
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: false,
    profilePicture:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "Jordan Smith",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 6",
    image:
      "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: false,
    profilePicture:
      "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "Micheal Angelo",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 7",
    image:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: false,
    profilePicture:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "John Doe",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 8",
    image:
      "https://images.pexels.com/photos/244796/pexels-photo-244796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: false,
    profilePicture:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "Jordan Smith",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
  {
    title: "Post 9",
    image:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    liked: false,
    profilePicture:
      "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profileName: "Micheal Angelo",
    comments: [
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Amazing View. <3",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Jordan Smith",
        comment: "Nice Weather.",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Wow! Snow EveryWhere",
      },
      {
        profilePicture:
          "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profileName: "Micheal Angelo",
        comment: "Where is this.",
      },
    ],
  },
];

// this is details of all products
export const AllProducts = [
  {
    title: "Table chair combo",
    image:
      "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 70,
    description: "This package includes ergo chair and table. Color white.",
  },
  {
    title: "Apple MacBook pro 13 inch.",
    image:
      "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 550,
    description:
      "Almost new laptop, slightly used. 2 years warranty remaining.",
  },
  {
    title: "MacBook pro max 13 inch.",
    image:
      "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 680,
    description:
      "Almost new laptop, slightly used. 1 years warranty remaining.",
  },
  {
    title: "Canon DSLR camera with lens",
    image:
      "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 200,
    description:
      "Almost new camera, slightly used. 6 months warranty remaining.",
  },
  {
    title: "Table chair combo",
    image:
      "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 70,
    description: "This package includes ergo chair and table. Color white.",
  },
  {
    title: "Apple MacBook pro 13 inch.",
    image:
      "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 550,
    description:
      "Almost new laptop, slightly used. 2 years warranty remaining.",
  },
  {
    title: "MacBook pro max 13 inch.",
    image:
      "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 680,
    description:
      "Almost new laptop, slightly used. 1 years warranty remaining.",
  },
  {
    title: "Canon DSLR camera with lens",
    image:
      "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 200,
    description:
      "Almost new camera, slightly used. 6 months warranty remaining.",
  },
];

//all the users in this app
export const AppUsers = [
  {
    title: "Jordan Smith",
    followers: 87,
    following: 20,
    coverPicture:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profilePicture:
      "https://images.pexels.com/photos/1370750/pexels-photo-1370750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    posts: [
      {
        title: "Post 2",
        image:
          "https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 5",
        image:
          "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 8",
        image:
          "https://images.pexels.com/photos/244796/pexels-photo-244796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
    ],
    products: [
      {
        title: "Table chair combo",
        image:
          "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 70,
        description: "This package includes ergo chair and table. Color white.",
      },
      {
        title: "Apple MacBook pro 13 inch.",
        image:
          "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 550,
        description:
          "Almost new laptop, slightly used. 2 years warranty remaining.",
      },
      {
        title: "MacBook pro max 13 inch.",
        image:
          "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 680,
        description:
          "Almost new laptop, slightly used. 1 years warranty remaining.",
      },
      {
        title: "Canon DSLR camera with lens",
        image:
          "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 200,
        description:
          "Almost new camera, slightly used. 6 months warranty remaining.",
      },
    ],
  },
  {
    title: "John Doe",
    followers: 187,
    following: 10,
    coverPicture:
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profilePicture:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    posts: [
      {
        title: "Post 1",
        image:
          "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 2",
        image:
          "https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 3",
        image:
          "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
    ],
    products: [
      {
        title: "Table chair combo",
        image:
          "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 70,
        description: "This package includes ergo chair and table. Color white.",
      },
      {
        title: "Apple MacBook pro 13 inch.",
        image:
          "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 550,
        description:
          "Almost new laptop, slightly used. 2 years warranty remaining.",
      },
      {
        title: "MacBook pro max 13 inch.",
        image:
          "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 680,
        description:
          "Almost new laptop, slightly used. 1 years warranty remaining.",
      },
      {
        title: "Canon DSLR camera with lens",
        image:
          "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 200,
        description:
          "Almost new camera, slightly used. 6 months warranty remaining.",
      },
    ],
  },
  {
    title: "Micheal Angelo",
    followers: 277,
    following: 200,
    coverPicture:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profilePicture:
      "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    posts: [
      {
        title: "Post 1",
        image:
          "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 2",
        image:
          "https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 3",
        image:
          "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 4",
        image:
          "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 5",
        image:
          "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 6",
        image:
          "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 7",
        image:
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 8",
        image:
          "https://images.pexels.com/photos/244796/pexels-photo-244796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
      {
        title: "Post 9",
        image:
          "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        liked: false,
      },
    ],
    products: [
      {
        title: "Table chair combo",
        image:
          "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 70,
        description: "This package includes ergo chair and table. Color white.",
      },
      {
        title: "Apple MacBook pro 13 inch.",
        image:
          "https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 550,
        description:
          "Almost new laptop, slightly used. 2 years warranty remaining.",
      },
      {
        title: "MacBook pro max 13 inch.",
        image:
          "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 680,
        description:
          "Almost new laptop, slightly used. 1 years warranty remaining.",
      },
      {
        title: "Canon DSLR camera with lens",
        image:
          "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 200,
        description:
          "Almost new camera, slightly used. 6 months warranty remaining.",
      },
    ],
  },
];
