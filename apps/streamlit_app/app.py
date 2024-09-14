import streamlit as st

st.title('Basic Streamlit Demo')

st.write("Hello, Streamlit!")

if st.button('Say hello!'):
    st.write('Why hello there!')
else:
    st.write('Goodbye!')

st.slider('Pick a number', 0, 100)

st.text_input('Your name')