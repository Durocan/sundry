import { Form1 } from './examples/forms/Form1';
import { Content1 } from './examples/pages/ex03/Contents/Content1';

import { Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Home } from './examples/pages/Home';
import { About } from './examples/pages/About';
import { Content2 } from './examples/pages/ex03/Contents/Content2';
import { BlogPosts } from './examples/pages/BlogPosts';

const NotFound = styled.div`
  text-align: center;
`;

function ExLayApp() {
    return (
        <Form1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/content1" element={<Content1 />} />
      <Route path="/content2" element={<Content2 />} />
      <Route path="/mock/blog-posts" element={<BlogPosts />} />
      <Route
       path={'*'}
       element={
         <>
         <NotFound>
         404 <br /> NOT FOUND
         </NotFound>
         </>
       }
      />
    </Routes>
        </Form1>
    );
}

export default ExLayApp;