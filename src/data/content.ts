import { faker } from '@faker-js/faker';
import { Briefcase, Smartphone, BarChart, Bot, Image, LayoutDashboard, FileText, Cloud, Users, Code, CreditCard, Calendar, TrendingUp, Wallet, Utensils, MessageSquare, Star, Settings } from 'lucide-react';

export const services = [
    { title: "Website Portofolio Interaktif", description: "Showcase your work with a stunning and interactive portfolio.", icon: Briefcase },
    { title: "Sistem Manajemen UMKM", description: "Streamline operations for your small or medium enterprise.", icon: Users },
    { title: "E-Commerce Custom", description: "Custom-built online stores to drive your sales.", icon: CreditCard },
    { title: "Freelance Marketplace Mini", description: "A mini-platform to connect freelancers with clients.", icon: Code },
    { title: "Sistem Booking Online", description: "Automate your scheduling and booking processes.", icon: Calendar },
    { title: "Aplikasi Keuangan Pribadi", description: "Track your expenses and manage your personal finances.", icon: Wallet },
    { title: "Habit Tracker", description: "Build better habits with a dedicated tracking application.", icon: TrendingUp },
    { title: "Marketplace Lokal", description: "A platform for local vendors to sell their products.", icon: Smartphone },
    { title: "E-Wallet UMKM", description: "Digital wallet solutions tailored for small businesses.", icon: Wallet },
    { title: "Food Order System", description: "An efficient system for ordering food from restaurants.", icon: Utensils },
    { title: "Chatbot Customer Service", description: "AI-powered chatbots to handle customer queries 24/7.", icon: MessageSquare },
    { title: "Sistem Rekomendasi Produk", description: "Increase sales with personalized product recommendations.", icon: Star },
    { title: "Analisis Sentimen Pelanggan", description: "Gain insights from customer feedback using AI.", icon: BarChart },
    { title: "AI Resume Screener", description: "Automate and speed up your hiring process.", icon: Bot },
    { title: "Image Recognition Produk", description: "AI to identify and categorize products from images.", icon: Image },
    { title: "Project Management App", description: "Organize tasks, timelines, and teams effectively.", icon: LayoutDashboard },
    { title: "HR & Absensi Online", description: "Manage human resources and employee attendance digitally.", icon: Users },
    { title: "Sistem Dokumen Digital", description: "Securely manage and share your digital documents.", icon: FileText },
    { title: "IoT Dashboard", description: "Monitor and control your IoT devices from a single dashboard.", icon: Settings },
    { title: "LMS (Learning Management System)", description: "Create, manage, and deliver educational courses online.", icon: Cloud },
];

export const portfolio = Array.from({ length: 6 }, () => ({
    id: faker.string.uuid(),
    title: 'Platform ' + faker.company.name(),
    description: faker.lorem.sentence(10),
    imageUrl: `https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/${faker.color.rgb({ format: 'hex', casing: 'lower' }).substring(1)}/ffffff?text=${faker.lorem.word()}`,
    liveUrl: '#',
}));

export const testimonials = [
    {
        id: faker.string.uuid(),
        name: 'Andi Wijaya',
        avatarUrl: `https://i.pravatar.cc/150?u=${faker.string.uuid()}`,
        project: 'Website E-Commerce',
        comment: `"Kerja sama dengan Tansan Devcode sangat memuaskan. Hasilnya melebihi ekspektasi, dan prosesnya sangat profesional. Website kami sekarang jauh lebih cepat dan modern."`,
    },
    {
        id: faker.string.uuid(),
        name: 'Siti Amelia',
        avatarUrl: `https://i.pravatar.cc/150?u=${faker.string.uuid()}`,
        project: 'Aplikasi Booking Online',
        comment: `"Sangat responsif dan solutif. Setiap kendala teknis dapat diselesaikan dengan cepat. Saya sangat merekomendasikan jasa dari Tansan Devcode untuk proyek digital Anda."`,
    },
    {
        id: faker.string.uuid(),
        name: 'Budi Santoso',
        avatarUrl: `https://i.pravatar.cc/150?u=${faker.string.uuid()}`,
        project: 'Sistem Manajemen Internal',
        comment: `"Profesional, tepat waktu, dan hasilnya berkualitas tinggi. Tansan Devcode berhasil menerjemahkan kebutuhan kompleks kami menjadi sistem yang mudah digunakan."`,
    },
];
