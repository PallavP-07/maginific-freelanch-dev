/**
 * Filter jobs based on search parameters
 * @param {Array} jobs - Array of job objects
 * @param {Object} searchParams - URL search parameters
 * @returns {Array} - Filtered jobs array
 */
export const filterJobs = (jobs, searchParams) => {
    if (!jobs || !jobs.length) return []
  
    // If no search parameters, return all jobs
    if (
      !searchParams ||
      Object.keys(searchParams).length === 0 ||
      (Object.keys(searchParams).length === 1 && searchParams.page)
    ) {
      return jobs
    }
  
    return jobs.filter((job) => {
      // Filter by job title
      if (searchParams.title && !job.title?.toLowerCase().includes(searchParams.title.toLowerCase())) {
        return false
      }
  
      // Filter by location
      if (searchParams.location && !job.location?.title?.toLowerCase().includes(searchParams.location.toLowerCase())) {
        return false
      }
  
      // Filter by date posted
      if (searchParams.datePosted) {
        const jobDate = new Date(job.date_posted)
        const today = new Date()
  
        switch (searchParams.datePosted) {
          case "today":
            if (!isSameDay(jobDate, today)) return false
            break
          case "last3days":
            if (daysDifference(jobDate, today) > 3) return false
            break
          case "lastweek":
            if (daysDifference(jobDate, today) > 7) return false
            break
          case "lastmonth":
            if (daysDifference(jobDate, today) > 30) return false
            break
          // 'anytime' doesn't filter
        }
      }
  
      // Filter by experience
      if (searchParams.experience) {
        const minExp = job.min_experience || 0
        const maxExp = job.max_experience || 0
  
        switch (searchParams.experience) {
          case "0-1":
            if (minExp > 1) return false
            break
          case "1-3":
            if (minExp > 3 || maxExp < 1) return false
            break
          case "3-5":
            if (minExp > 5 || maxExp < 3) return false
            break
          case "5-10":
            if (minExp > 10 || maxExp < 5) return false
            break
          case "10+":
            if (minExp < 10) return false
            break
        }
      }
  
      // Filter by job type
      if (searchParams.jobType && job.job_type?.toLowerCase() !== searchParams.jobType.toLowerCase()) {
        return false
      }
  
      // Filter by industry
      if (searchParams.industry && !job.industry?.title?.toLowerCase().includes(searchParams.industry.toLowerCase())) {
        return false
      }
  
      return true
    })
  }
  
  /**
   * Check if two dates are the same day
   */
  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }
  
  /**
   * Calculate days difference between two dates
   */
  const daysDifference = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1)
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }
  