import createDataContext from "./createDataContext";
import { AllPosts } from "./DATA";

// this context handles state for all posts and commnets.
const postReducer = (state, action) => {
  switch (action.type) {
    case "add_comment":
      const { postTitle, comment } = action.payload;
      const updatedPosts = state.allPosts.map((post) =>
        post.title === postTitle
          ? { ...post, comments: [...post.comments, comment] }
          : post
      );
      return { allPosts: updatedPosts };
    case "add_post":
      return { allPosts: [...state.allPosts, ...action.payload] };
    default: {
      return state;
    }
  }
};

const addComment =
  (dispatch) =>
  ({ postTitle, comment }) => {
    dispatch({ type: "add_comment", payload: { postTitle, comment } });
  };
const addPost = (dispatch) => () => {
  const post = [
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
  dispatch({ type: "add_post", payload: post });
};

export const { Provider, Context } = createDataContext(
  postReducer,
  { addComment, addPost },
  { allPosts: AllPosts }
);
