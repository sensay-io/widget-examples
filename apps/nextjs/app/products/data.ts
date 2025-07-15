export const PRODUCTS = [
  {
    id: 1,
    name: "GPT-4 Turbo",
    description:
      "Advanced language model with improved reasoning and multimodal capabilities",
    category: "Language Model",
    content:
      "GPT-4 Turbo represents the latest advancement in OpenAI's language model series, offering enhanced performance across a wide range of tasks. It features improved reasoning capabilities, better understanding of context, and the ability to process both text and images. The model excels at complex problem-solving, creative writing, and technical analysis while maintaining high accuracy and coherence in its responses.",
    features: {
      "Context Length": "128K tokens",
      Multimodal: "Text and images",
      "Training Data": "Up to April 2024",
      "Response Speed": "Optimized for speed",
    },
  },
  {
    id: 2,
    name: "Claude 3.5 Sonnet",
    description:
      "Anthropic's most capable AI model for complex reasoning and analysis",
    category: "Language Model",
    content:
      "Claude 3.5 Sonnet is Anthropic's flagship AI model designed with a focus on safety and helpfulness. It demonstrates exceptional performance in analytical tasks, mathematical reasoning, and nuanced conversation. The model is particularly strong at understanding context, following complex instructions, and providing thoughtful, well-reasoned responses across diverse domains.",
    features: {
      "Safety Focus": "Constitutional AI training",
      Reasoning: "Advanced analytical capabilities",
      "Context Window": "200K tokens",
      "Code Generation": "High-quality programming support",
    },
  },
  {
    id: 3,
    name: "DALL-E 3",
    description:
      "State-of-the-art image generation model with enhanced creativity",
    category: "Image Generation",
    content:
      "DALL-E 3 revolutionizes image creation with its ability to generate highly detailed and creative visuals from text descriptions. The model understands complex prompts and can create images in various artistic styles, from photorealistic to abstract art. It features improved safety measures and better adherence to user prompts, making it an invaluable tool for artists, designers, and content creators.",
    features: {
      Resolution: "1024x1024 pixels",
      "Style Range": "Photorealistic to abstract",
      "Prompt Adherence": "Enhanced understanding",
      "Safety Filters": "Built-in content moderation",
    },
  },
  {
    id: 4,
    name: "Whisper",
    description:
      "Automatic speech recognition system with multilingual support",
    category: "Speech Recognition",
    content:
      "Whisper is OpenAI's robust automatic speech recognition system trained on diverse audio data from the web. It supports transcription in multiple languages and can handle various audio qualities and accents with remarkable accuracy. The model is particularly useful for transcription services, accessibility applications, and multilingual communication tools.",
    features: {
      Languages: "99+ supported languages",
      "Audio Quality": "Robust to noise and accents",
      "Model Sizes": "Multiple variants available",
      "Open Source": "Freely available for use",
    },
  },
  {
    id: 5,
    name: "Midjourney",
    description:
      "AI-powered art generator creating stunning visual content from text prompts",
    category: "Image Generation",
    content:
      "Midjourney has become synonymous with high-quality AI-generated art, known for its distinctive aesthetic and artistic flair. The platform excels at creating visually striking images with rich details and creative interpretations of user prompts. It's particularly popular among artists, designers, and creative professionals who seek to explore new visual concepts and artistic styles.",
    features: {
      "Artistic Style": "Distinctive aesthetic quality",
      Community: "Discord-based platform",
      "Aspect Ratios": "Flexible output formats",
      Upscaling: "High-resolution enhancement",
    },
  },
  {
    id: 6,
    name: "Stable Diffusion",
    description:
      "Open-source text-to-image model for creative content generation",
    category: "Image Generation",
    content:
      "Stable Diffusion stands out as a powerful open-source alternative in the image generation space, offering flexibility and customization options. The model can be fine-tuned for specific use cases and runs efficiently on consumer hardware. Its open-source nature has fostered a vibrant community of developers and artists who continuously improve and extend its capabilities.",
    features: {
      "Open Source": "Fully customizable and free",
      "Hardware Requirements": "Runs on consumer GPUs",
      "Fine-tuning": "Customizable for specific use cases",
      "Community Models": "Extensive model ecosystem",
    },
  },
  {
    id: 7,
    name: "Gemini Pro",
    description:
      "Google's multimodal AI model for text, code, and image understanding",
    category: "Language Model",
    content:
      "Gemini Pro represents Google's ambitious entry into the advanced AI model space, offering multimodal capabilities that span text, code, and visual understanding. The model integrates seamlessly with Google's ecosystem and demonstrates strong performance in reasoning tasks and code generation. It's designed to handle complex queries that require understanding multiple types of input simultaneously.",
    features: {
      Multimodal: "Text, code, and images",
      "Google Integration": "Seamless ecosystem support",
      "Code Understanding": "Advanced programming capabilities",
      "Real-time Processing": "Fast response times",
    },
  },
  {
    id: 8,
    name: "ElevenLabs",
    description:
      "Advanced text-to-speech AI with natural voice synthesis capabilities",
    category: "Speech Synthesis",
    content:
      "ElevenLabs has revolutionized text-to-speech technology with its incredibly natural-sounding voice synthesis capabilities. The platform can clone voices with minimal training data and supports multiple languages and accents. It's widely used for audiobook production, content creation, and accessibility applications, offering unprecedented quality in synthetic speech generation.",
    features: {
      "Voice Cloning": "Minimal training data required",
      "Natural Quality": "Human-like speech synthesis",
      "Multi-language": "Global language support",
      "Real-time": "Instant voice generation",
    },
  },
  {
    id: 9,
    name: "CodeT5",
    description:
      "Specialized AI model for code generation and programming assistance",
    category: "Code Generation",
    content:
      "CodeT5 is specifically designed to understand and generate code across multiple programming languages with high accuracy. The model excels at code completion, bug fixing, and code translation between different languages. It serves as an invaluable assistant for developers, helping to accelerate development workflows and improve code quality through intelligent suggestions and automated programming tasks.",
    features: {
      "Multi-language": "Support for major programming languages",
      "Code Completion": "Intelligent auto-completion",
      "Bug Detection": "Automated error identification",
      "Code Translation": "Cross-language conversion",
    },
  },
  {
    id: 10,
    name: "RunwayML",
    description:
      "AI-powered video editing and generation platform for creative professionals",
    category: "Video Generation",
    content:
      "RunwayML has pioneered AI-powered video creation and editing tools that democratize professional video production. The platform offers features like background removal, style transfer, and video generation from text prompts. It's particularly valuable for content creators, filmmakers, and marketing professionals who need to produce high-quality video content efficiently and cost-effectively.",
    features: {
      "Video Generation": "Text-to-video capabilities",
      "Background Removal": "Automated green screen effects",
      "Style Transfer": "Artistic video transformation",
      "Real-time Editing": "Live video processing",
    },
  },
  {
    id: 11,
    name: "Perplexity AI",
    description:
      "AI-powered search engine that provides accurate answers with citations",
    category: "Search & Research",
    content:
      "Perplexity AI combines the power of large language models with real-time web search to provide accurate, cited answers to user queries. Unlike traditional search engines, it synthesizes information from multiple sources and presents coherent responses with proper attribution. The platform is particularly useful for research, fact-checking, and getting comprehensive answers to complex questions.",
    features: {
      "Real-time Search": "Live web information access",
      "Source Citations": "Proper attribution and references",
      Synthesis: "Multi-source information combining",
      "Fact Checking": "Accuracy verification tools",
    },
  },
  {
    id: 12,
    name: "Synthesia",
    description:
      "AI video generation platform that creates professional videos from text",
    category: "Video Generation",
    content:
      "Synthesia transforms text into professional-quality videos featuring AI-generated avatars that can speak in multiple languages. The platform eliminates the need for cameras, studios, or actors, making video production accessible to businesses and individuals. It's particularly popular for training videos, marketing content, and educational materials where consistent, professional presentation is required.",
    features: {
      "AI Avatars": "Realistic digital presenters",
      "Multi-language": "Global language support",
      "No Equipment": "Studio-free video production",
      "Professional Quality": "Broadcast-ready output",
    },
  },
];

const IMAGES = [
  "/products/marek-piwnicki-0HGGZThXGp8-unsplash.jpg",
  "/products/marek-piwnicki-gXkH6KpP8cw-unsplash.jpg",
  "/products/marek-piwnicki-MFBei_bXpac-unsplash.jpg",
  "/products/marek-piwnicki-nwBIdpYt9UU-unsplash.jpg",
] as const;

export const getImage = (index: number) => {
  return IMAGES[index % IMAGES.length] || IMAGES[0];
};

export const getProduct = (id: number) => {
  return PRODUCTS.find((p) => p.id === id);
};
