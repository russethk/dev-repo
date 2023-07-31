from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle

# Make Flask errors be real errors, not HTML pages with error info
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

class FlaskTests(TestCase):

    def setUp(self):

        self.client = app.test_client()
        app.config['TESTING'] = True

    def test_homepage(self):
        """Test homepage"""
        
        with self.client:
            resp = self.client.get('/')
            self.assertIn('board', session)
            self.assertIsNone(session.get('highscore'))
            self.assertIsNone(session.get('nplays'))
            self.assertIn(b'Score:', resp.data)
            self.assertIn(b'Seconds Left:', resp.data)


    def test_valid_word(self):
        """Test valid word"""
        self.client.get('/')
        with self.client.session_transaction() as change_session:
                change_session['board'] = [["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"]]
        resp = self.client.get('/check-word?word=cat')
        self.assertEqual(resp.json['result'], 'ok')

    def test_invalid_word(self):
        """Test check not word"""
        self.client.get('/')
        resp = self.client.get('/check-word?word=impossible')
        self.assertEqual(resp.json['result'], 'not-on-board')

    def test_non_english_word(self):
        """Test check not english word"""
        self.client.get('/')
        resp = self.client.get(
            '/check-word?word=fsjdakfkldsfjdslkfjdlksf')
        self.assertEqual(resp.json['result'], 'not-word')

    def test_post_score(self):
        """Test post score"""
        self.client.get('/')
        with self.client.session_transaction() as change_session:
                change_session['highscore'] = 0
                change_session['nplays'] = 0
        resp = self.client.post('/post-score', json={'score': 10})
        self.assertEqual(resp.json['brokeRecord'], True)