from django.test import TestCase

class TestPage(TestCase):
    def test_main_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'frontend/index.html')
        self.assertContains(response, 'app')
