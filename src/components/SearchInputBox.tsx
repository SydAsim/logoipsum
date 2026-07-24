import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Paperclip,
  Mic,
  Search,
  ArrowUp,
  X,
  FileText,
  CheckCircle2,
  Volume2
} from 'lucide-react';

interface SearchInputBoxProps {
  onUpgradeClick?: () => void;
}

export const SearchInputBox: React.FC<SearchInputBoxProps> = ({ onUpgradeClick }) => {
  const [inputText, setInputText] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showPromptsMenu, setShowPromptsMenu] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const samplePrompts = [
    'Analyze Q3 revenue growth and cost anomalies',
    'Summarize key insights from uploaded customer surveys',
    'Forecast next quarter conversion rate trends',
    'Generate executive summary dashboard overview'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 3000) {
      setInputText(e.target.value);
    }
  };

  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileList = Array.from(e.target.files) as File[];
      const names = fileList.map((f) => f.name);
      setAttachedFiles((prev) => [...prev, ...names]);
    }
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleVoice = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Simulate speech to text after 2 seconds
      setTimeout(() => {
        setInputText((prev) => (prev ? `${prev} Compare quarterly retention metrics.` : 'Compare quarterly retention metrics.'));
        setIsRecording(false);
      }, 2500);
    } else {
      setIsRecording(false);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() && attachedFiles.length === 0) return;

    setIsSubmitting(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setAiResponse(
        `Analysis Complete: Based on your input "${inputText || 'uploaded dataset'}", processing identified a 18.4% increase in processing efficiency with zero data anomalies.`
      );
    }, 1200);
  };

  return (
    <div className="w-full max-w-[728px] mx-auto">
      {/* Search Input Box Container */}
      <div
        id="search-input-box-container"
        className="w-full min-h-[200px] max-w-[728px] bg-[rgba(0,0,0,0.24)] backdrop-blur-md rounded-[18px] p-4 flex flex-col justify-between shadow-xl border border-white/10 relative text-white"
      >
        {/* Top Row: Credit info & GPT-4o Badge */}
        <div className="flex items-center justify-between font-schibsted font-medium text-[12px] text-white">
          {/* Left: Credits info + Green Upgrade button */}
          <div className="flex items-center gap-2">
            <span id="credits-info" className="opacity-90">
              60/450 credits
            </span>
            <button
              id="btn-upgrade-credits"
              onClick={onUpgradeClick}
              className="bg-[rgba(90,225,76,0.89)] text-black font-schibsted font-semibold text-[12px] px-2.5 py-0.5 rounded-full hover:bg-[rgba(90,225,76,1)] transition-colors cursor-pointer"
            >
              Upgrade
            </button>
          </div>

          {/* Right: AI Icon + Powered by GPT-4o */}
          <div id="powered-by-badge" className="flex items-center gap-1.5 opacity-90">
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            <span>Powered by GPT-4o</span>
          </div>
        </div>

        {/* Main Input Area */}
        <div className="my-2.5">
          <div className="bg-white rounded-[12px] p-3 shadow-md flex flex-col justify-between transition-shadow focus-within:shadow-lg border border-black/5">
            {/* Attached files indicator */}
            {attachedFiles.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2">
                {attachedFiles.map((filename, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-gray-100 text-black text-xs px-2 py-1 rounded-md font-schibsted"
                  >
                    <FileText className="w-3 h-3 text-gray-600" />
                    <span className="max-w-[140px] truncate">{filename}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="hover:text-red-500 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between gap-3">
              <textarea
                id="search-input-textarea"
                rows={1}
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                placeholder="Type question..."
                className="w-full bg-transparent text-black placeholder-[rgba(0,0,0,0.6)] font-schibsted text-[16px] resize-none outline-none pr-2 py-1"
              />

              {/* Black Circular Submit Button with Up Arrow */}
              <button
                id="btn-submit-question"
                type="button"
                onClick={() => handleSubmit()}
                disabled={isSubmitting || (!inputText.trim() && attachedFiles.length === 0)}
                className="w-[36px] h-[36px] bg-black text-white rounded-full flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 transition-all disabled:opacity-40 cursor-pointer shadow-sm"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowUp className="w-5 h-5 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Bottom Row */}
        <div className="flex items-center justify-between pt-1">
          {/* Left: Three Action Buttons */}
          <div className="flex items-center gap-2 relative">
            {/* Attach Button */}
            <button
              id="btn-attach"
              type="button"
              onClick={handleAttachClick}
              className="bg-[#f8f8f8] hover:bg-white text-black font-schibsted font-medium text-[13px] px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Paperclip className="w-3.5 h-3.5 text-black" />
              <span>Attach</span>
            </button>

            {/* Voice Button */}
            <button
              id="btn-voice"
              type="button"
              onClick={toggleVoice}
              className={`font-schibsted font-medium text-[13px] px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs ${
                isRecording
                  ? 'bg-red-500 text-white animate-pulse'
                  : 'bg-[#f8f8f8] hover:bg-white text-black'
              }`}
            >
              {isRecording ? (
                <Volume2 className="w-3.5 h-3.5 text-white" />
              ) : (
                <Mic className="w-3.5 h-3.5 text-black" />
              )}
              <span>{isRecording ? 'Listening...' : 'Voice'}</span>
            </button>

            {/* Prompts Button */}
            <div className="relative">
              <button
                id="btn-prompts"
                type="button"
                onClick={() => setShowPromptsMenu(!showPromptsMenu)}
                className="bg-[#f8f8f8] hover:bg-white text-black font-schibsted font-medium text-[13px] px-3 py-1.5 rounded-[6px] flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Search className="w-3.5 h-3.5 text-black" />
                <span>Prompts</span>
              </button>

              {/* Sample Prompts Dropdown */}
              {showPromptsMenu && (
                <div className="absolute bottom-full left-0 mb-2 w-72 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-black/10 p-2 z-30 text-black">
                  <div className="text-xs font-schibsted font-semibold text-gray-500 px-2 py-1 uppercase tracking-wider">
                    Suggested Prompts
                  </div>
                  {samplePrompts.map((promptText, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setInputText(promptText);
                        setShowPromptsMenu(false);
                      }}
                      className="w-full text-left px-2.5 py-1.5 text-xs font-schibsted hover:bg-black/5 rounded-lg transition-colors truncate cursor-pointer"
                    >
                      {promptText}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Character Counter */}
          <div id="character-counter" className="font-schibsted text-[12px] text-white/80 select-none">
            {inputText.length.toLocaleString()}/3,000
          </div>
        </div>
      </div>

      {/* AI Response Toast / Output Card */}
      {aiResponse && (
        <div className="mt-4 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-black/10 text-black flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-schibsted font-semibold text-sm text-black">Insight Output</h4>
            <p className="font-schibsted text-sm text-gray-700 mt-1">{aiResponse}</p>
          </div>
          <button
            onClick={() => setAiResponse(null)}
            className="text-gray-400 hover:text-black cursor-pointer p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
