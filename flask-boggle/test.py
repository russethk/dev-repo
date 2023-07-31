from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle

# Make Flask errors be real errors, not HTML pages with error info
app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']


class FlaskTests(TestCase):

    def setUp(self):

        self.client = app.test_client()
        app.config['TESTING'] = True

    def test_homepage(self):
        """Test homepage"""
        with self.client as client:
            resp = client.get('/')
            html = resp.get_data(as_text=True)
            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1>Boggle</h1>', html)

    def test_valid_word(self):
        """Test valid word"""
        with self.client as client:
            with client.session_transaction() as change_session:
                change_session['board'] = [["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"],
                                            ["C", "A", "T", "T", "T"]]
            resp = client.get('/check-word?word=cat')
            self.assertEqual(resp.json['result'], 'ok')

    def test_check_not_word(self):
        """Test check not word"""
        with self.client as client:
            resp = client.get('/check-word?word=notaword')
            self.assertEqual(resp.json['result'], 'not-word')

    def test_check_not_on_board(self):
        """Test check not on board"""
        with self.client as client:
            resp = client.get('/check-word?word=impossible')
            self.assertEqual(resp.json['result'], 'not-on-board')

    def test_post_score(self):
        """Test post score"""
        with self.client as client:
            with client.session_transaction() as change_session:
                change_session['highscore'] = 0
                change_session['nplays'] = 0
            resp = client.post('/post-score', json={'score': 10})
            self.assertEqual(resp.json['brokeRecord'], True)

    def test_post_score_not_record(self):
        """Test post score not record"""
        with self.client as client:
            with client.session_transaction() as change_session:
                change_session['highscore'] = 10
                change_session['nplays'] = 0
            resp = client.post('/post-score', json={'score': 5})
            self.assertEqual(resp.json['brokeRecord'], False)
