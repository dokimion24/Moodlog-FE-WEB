import React, { Suspense, lazy } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from '../components/common/layout'
import ProtectedRouter from './ProtectedRouter'

import UserdataRouter from './UserdataRouter'
import DiaryCreateProtected from './DiaryCreateProtected'
import NotFound from '../pages/notFoundPage'
import Loading from '../components/common/loading'

const LoginPage = lazy(() => import('../pages/loginPage'))
const RegisterPage = lazy(() => import('../pages/registerPage'))
const HomePage = lazy(() => import('../pages/homePage'))
const SearchPage = lazy(() => import('../pages/searchPage'))
const ProfilePage = lazy(() => import('../pages/profilePage'))
const CalendarPage = lazy(() => import('../pages/calendarPage'))
const FollowPage = lazy(() => import('../pages/followPage'))
const SettingPage = lazy(() => import('../pages/settingPage'))
const DiaryCreatePage = lazy(() => import('../pages/diaryCreatePage'))
const DiaryPage = lazy(() => import('../pages/diaryPage'))
const ShowDiary = lazy(() => import('../pages/showDiaryPage'))

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<UserdataRouter />}>
              <Route element={<ProtectedRouter />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/calendar/:id" element={<CalendarPage />} />
                <Route path="/follow/:id" element={<FollowPage />} />
                <Route path="/setting" element={<SettingPage />} />

                <Route element={<DiaryCreateProtected />}>
                  <Route path="/diaryCreate" element={<DiaryCreatePage />} />
                </Route>
                <Route path="/diaryCreate/:id" element={<DiaryCreatePage />} />

                <Route path="/diary" element={<DiaryPage />} />

                <Route path="/diary/:id" element={<ShowDiary />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
