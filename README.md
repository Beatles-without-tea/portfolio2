Install guide:

Install Node.js and npm
RUN mkdir portfolio
RUN npx create-react-app portfolio-frontend
RUN pip install virtualenv
RUN mkdir portfolio-backend
RUN cd portfolio-backend
RUN virtualenv venv
RUN source venv/bin/activate
RUN pip install Flask
RUN cd ../cd portfolio-frontend
RUN npm install react-router-dom @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
RUN npm install react-bootstrap bootstrap


run guide:

Frontend:
cd in frontend and run:
npm start

Backend:
cd in backedna and run:
python app.py