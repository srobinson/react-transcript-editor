import autoEdit2ToDraft from './index';
// TODO: could make this test run faster by shortning the two sample to one or two paragraphs?
import draftTranscriptExample from './sample/autoEdit2ToDraft-sample';
import autoEdit2TedTalkTranscript from './sample/autoEdit2TedTalkTranscript-sample.json';

describe('bbcKaldiToDraft', () => {
  const result = autoEdit2ToDraft(autoEdit2TedTalkTranscript, 'text');
  it('Should be defined', ( ) => {
    expect(result).toBeDefined();
  })

  it('Should be equal to expected value', ( ) => {
    expect(result).toEqual(draftTranscriptExample);
  })
})
