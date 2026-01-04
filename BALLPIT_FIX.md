# Mobile Touch Fix

The issue is in `src/components/Ballpit.tsx` - the touch event handlers are calling `e.preventDefault()` which blocks ALL touch interactions on mobile.

## Lines to comment out:

Around line 582-606, comment out the touch event listeners:

```typescript
// Comment out these lines:
document.body.addEventListener("touchstart", onTouchStart as EventListener, {
  passive: false,
});
document.body.addEventListener("touchmove", onTouchMove as EventListener, {
  passive: false,
});
document.body.addEventListener("touchend", onTouchEnd as EventListener, {
  passive: false,
});
document.body.addEventListener("touchcancel", onTouchEnd as EventListener, {
  passive: false,
});
```

Around line 625-628, comment out the remove listeners:

```typescript
// Comment out these lines:
document.body.removeEventListener("touchstart", onTouchStart as EventListener);
document.body.removeEventListener("touchmove", onTouchMove as EventListener);
document.body.removeEventListener("touchend", onTouchEnd as EventListener);
document.body.removeEventListener("touchcancel", onTouchEnd as EventListener);
```

This will allow mobile taps to work since the canvas already has `pointer-events: none`.
