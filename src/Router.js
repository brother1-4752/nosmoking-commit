import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import Journal from "./pages/Journal";
import VideoLetter from "./pages/VideoLetter";
import VoiceRecord from "./pages/VoiceRecord";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user/:id/journal" element={<Journal />} />
        <Route path="/user/:id/videoletter" element={<VideoLetter />} />
        <Route path="/user/:id/voicerecord" element={<VoiceRecord />} />
        <Route path="/user/:id" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
