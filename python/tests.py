import unittest, json
from short import aSillyFunctionShort

class SimpleWidgetTestCase(unittest.TestCase):
    def setUp(self):
        self.ordered_data = json.load(open('../sample_data_ordered.json','r'))
        self.shuffled_data = json.load(open('../sample_data_shuffled.json','r'))
    
    def testSillyFunctionShort(self):
        self.assertEqual(aSillyFunctionShort(self.shuffled_data),
            self.ordered_data, 'incorrect data ordering')

if __name__ == '__main__':
    unittest.main()